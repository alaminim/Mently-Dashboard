import React, { ReactNode } from 'react';
import Button from '../common/Button';

interface UserProfileProps {
  children: ReactNode;
}

const UserProfile = ({ children }: UserProfileProps) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex gap-8 justify-between items-center p-4">
        <div className="flex gap-7 items-center">
          {children}
          <Button className="!rounded-full !p-2" variant="primary" size="small">
            message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;