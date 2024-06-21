import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { toast } from 'sonner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch users from the backend or mock data
    const fetchUsers = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '' });
    setIsModalOpen(false);
    toast.success('User added successfully');
  };

  const handleEditUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = newUser;
    setUsers(updatedUsers);
    setNewUser({ name: '', email: '' });
    setIsModalOpen(false);
    toast.success('User updated successfully');
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    toast.success('User deleted successfully');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="p-4">
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>User Management</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-4">
        <Input
          placeholder="Search Users"
          value={searchQuery}
          onChange={handleSearch}
          className="mr-2"
        />
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-2">{newUser.name ? 'Edit User' : 'Add User'}</h2>
              <p className="mb-4">{newUser.name ? 'Edit the details of the user.' : 'Enter the details of the new user.'}</p>
              <div className="mb-4">
                <Input
                  placeholder="User Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="mr-2"
                />
                <Input
                  placeholder="User Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="mr-2"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setIsModalOpen(false)} className="mr-2">Cancel</Button>
                <Button onClick={newUser.name ? handleEditUser : handleAddUser}>
                  {newUser.name ? 'Save Changes' : 'Add User'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User Name</TableHead>
            <TableHead>User Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button onClick={() => handleEditUser(index)} className="mr-2">Edit</Button>
                <Button onClick={() => handleDeleteUser(index)} variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UserManagement;