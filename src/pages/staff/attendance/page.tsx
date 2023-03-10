import ClientStaffAttendanceList from "./ClientAttendance";

export default function AttendanceManagement() {
  return (
    <>
      <div>
        {/* BREADCRUMB */}
        <div className="page-meta">
          <nav className="breadcrumb-style-one" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">App</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Staff</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Attendance
              </li>
            </ol>
          </nav>
        </div>
        {/* /BREADCRUMB */}
        <div className="row layout-spacing layout-top-spacing mb-4">
          <ClientStaffAttendanceList/>

        </div>
      </div>
    </>
  );
}
