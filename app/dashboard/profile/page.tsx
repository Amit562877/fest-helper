'use client';
import { useEffect, useState } from 'react';
import ProfileForm from '@/components/forms/ProfileForm';
import { getProfile } from '@/lib/auth';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile("vendor-123").then(setProfile);
  }, []);

  return (
    <div className="mx-auto">
      {profile && <ProfileForm profile={profile} />}
    </div>
  );
}