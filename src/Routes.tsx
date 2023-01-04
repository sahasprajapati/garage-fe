import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/layout";
import SignIn from "./pages/auth/signin/page";
import SignUp from "./pages/auth/signup/page";
import CustomerManagement from "./pages/customer-management";
import OwnedVehicles from "./pages/customer-management/owned-vehicle";
import Dashboard from "./pages/dashboard";
import RecondtionManagement from "./pages/recondition-management/page";
import ServiceManagement from "./pages/service-management/page";
import AttendanceManagement from "./pages/staff/attendance/page";
import DesignationManagement from "./pages/staff/designation/page";
import LeaveManagement from "./pages/staff/leave/page";
import ListStaffManagement from "./pages/staff/list/page";
import RoleManagement from "./pages/user-management/role/page";
import UserManagement from "./pages/user-management/user/page";
import VehicleManagement from "./pages/vehicle-management/page";
import VehicleBrandManagement from "./pages/vehicle-management/vehicle-brand-management/page";
import VehicleTypeManagement from "./pages/vehicle-management/vehicle-type-management/page";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="admin/customer-management"
          element={<CustomerManagement />}
        />
        <Route
          path="admin/customer-management/owned-vehicle"
          element={<CustomerManagement />}
        />
        <Route
          path="admin/recondition-management"
          element={<RecondtionManagement />}
        />
        <Route
          path="admin/service-management"
          element={<ServiceManagement />}
        />
        <Route
          path="admin/staff/attendance"
          element={<AttendanceManagement />}
        />
        <Route
          path="admin/staff/designation"
          element={<DesignationManagement />}
        />
        <Route path="admin/staff/leave" element={<LeaveManagement />} />
        <Route path="admin/staff" element={<ListStaffManagement />} />
        <Route path="admin/user-management" element={<UserManagement />} />
        <Route path="admin/user-management/role" element={<RoleManagement />} />
        <Route
          path="admin/vehicle-management"
          element={<VehicleManagement />}
        />
        <Route
          path="admin/vehicle-management/vehicle-type-management"
          element={<VehicleTypeManagement />}
        />
        <Route
          path="admin/vehicle-management/vehicle-brand-management"
          element={<VehicleBrandManagement />}
        />
{/* 
        <Route
          path="admin/vehicle-management/vehicle-brand-management"
          element={<SignIn />}
        />

        <Route
          path="admin/vehicle-management/vehicle-brand-management"
          element={<SignUp />}
        /> */}
      </Route>
    </Routes>
  );
}
