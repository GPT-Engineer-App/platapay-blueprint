import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Ordering = () => {
  const [location, setLocation] = useState(null);
  const [merchants, setMerchants] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    // Mock fetching nearby merchants based on location
    if (location) {
      setMerchants([
        { id: 1, name: 'Merchant 1' },
        { id: 2, name: 'Merchant 2' },
      ]);
    }
  }, [location]);

  const handlePlaceOrder = (merchantId) => {
    if (!order) {
      toast.error('Please enter an order');
      return;
    }
    toast.success(`Order placed with Merchant ${merchantId}`);
    setOrder('');
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          toast.success('Location fetched successfully');
        },
        (error) => {
          toast.error('Failed to fetch location');
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ordering</h1>
      <Button onClick={handleGetLocation} className="mb-4">Get Location</Button>
      {location && (
        <div className="mb-4">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <div className="mb-4">
        <Input
          placeholder="Enter Order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="mr-2"
        />
      </div>
      <div>
        {merchants.map((merchant) => (
          <div key={merchant.id} className="mb-2">
            <p>{merchant.name}</p>
            <Button onClick={() => handlePlaceOrder(merchant.id)}>Place Order</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordering;