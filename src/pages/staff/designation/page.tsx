import ClientDesignationList from './ClientPage';

export default function DesignationManagement() {
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
                <a href="#">Settings</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Staff
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Designation
              </li>
            </ol>
          </nav>
        </div>
        {/* /BREADCRUMB */}
        <div className="row layout-spacing layout-top-spacing mb-4">
          <ClientDesignationList />
        </div>
      </div>
    </>
  );
}
