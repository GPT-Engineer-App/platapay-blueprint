import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const EWalletManagement = () => {
  const [balance, setBalance] = useState(1000); // Initial balance for demonstration
  const [amount, setAmount] = useState('');

  const handleAddFunds = () => {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    setBalance(balance + amountNumber);
    setAmount('');
    toast.success('Funds added successfully');
  };

  const handleWithdrawFunds = () => {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    if (amountNumber > balance) {
      toast.error('Insufficient balance');
      return;
    }
    setBalance(balance - amountNumber);
    setAmount('');
    toast.success('Funds withdrawn successfully');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">E-Wallet Management</h1>
      <p className="mb-4">Current Balance: ${balance.toFixed(2)}</p>
      <div className="mb-4">
        <Input
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleAddFunds} className="mr-2">Add Funds</Button>
        <Button onClick={handleWithdrawFunds}>Withdraw Funds</Button>
      </div>
    </div>
  );
};

export default EWalletManagement;