import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const FundTransfers = () => {
  const [balance, setBalance] = useState(1000); // Initial balance for demonstration
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleTransferFunds = () => {
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    if (amountNumber > balance) {
      toast.error('Insufficient balance');
      return;
    }
    if (!recipient) {
      toast.error('Please enter a recipient');
      return;
    }
    setBalance(balance - amountNumber);
    setAmount('');
    setRecipient('');
    toast.success('Funds transferred successfully');
  };

  const handleRequestCashOut = () => {
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
    toast.success('Cash-out requested successfully');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fund Transfers</h1>
      <p className="mb-4">Current Balance: ${balance.toFixed(2)}</p>
      <div className="mb-4">
        <Input
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mr-2"
        />
        <Input
          placeholder="Enter Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleTransferFunds} className="mr-2">Transfer Funds</Button>
        <Button onClick={handleRequestCashOut}>Request Cash-Out</Button>
      </div>
    </div>
  );
};

export default FundTransfers;