import React, { useState } from 'react';
import { Button } from '../../components';

interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'booked' | 'selected';
  price: number;
}

interface SeatSelectorProps {
  seats: Seat[];
  onConfirm: (selectedSeats: string[]) => void;
}

const SeatSelector: React.FC<SeatSelectorProps> = ({ seats, onConfirm }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const totalPrice = seats
    .filter(seat => selectedSeats.includes(seat.id))
    .reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div>
      <div className="mb-8 grid grid-cols-8 gap-2">
        {seats.map(seat => (
          <button
            key={seat.id}
            onClick={() => seat.status === 'available' && handleSeatClick(seat.id)}
            disabled={seat.status === 'booked'}
            className={`
              h-10 w-10 rounded-md text-sm font-medium transition-colors
              ${
                seat.status === 'booked'
                  ? 'cursor-not-allowed bg-gray-300'
                  : selectedSeats.includes(seat.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-white hover:bg-blue-50'
              }
            `}
          >
            {seat.row}{seat.number}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div>
          <p className="text-sm text-gray-600">Đã chọn: {selectedSeats.length} ghế</p>
          <p className="text-lg font-semibold">
            Tổng tiền: {totalPrice.toLocaleString('vi-VN')}đ
          </p>
        </div>
        <Button
          onClick={() => onConfirm(selectedSeats)}
          disabled={selectedSeats.length === 0}
        >
          Xác nhận đặt vé
        </Button>
      </div>
    </div>
  );
};

export default SeatSelector; 