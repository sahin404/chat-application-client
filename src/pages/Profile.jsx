import { Mail, User } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Profile = () => {
  const { user, updateProfile, isUpdateProfile } = useAuthStore();
  return (
    <div className="h-screen pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 p-6 rounded-xl space-y-6">
          {/* Profile Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your Profile Information</p>
          </div>

          {/* Avatar Section */}
          <div></div>

          {/* Information Section */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-300 rounded-lg border">
                {user?.fullName}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="flex gap-2 items-center text-zinc-400 text-sm">
                <Mail className="size-4"></Mail>
                Email
              </div>
              <div className="border px-4 py-2.5 bg-base-300 rounded-lg">
                <p>{user.email}</p>
              </div>
            </div>
          </div>

          {/*Foooter Section  */}
          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{user.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
