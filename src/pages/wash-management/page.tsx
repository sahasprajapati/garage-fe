import ClientWashList from "./ClientPage";

export default function ClientWash() {
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
                Customer
              </li>
            </ol>
          </nav>
        </div>
        {/* /BREADCRUMB */}
        <div className="row layout-spacing layout-top-spacing mb-4">
          <ClientWashList />
        </div>
      </div>
    </>
  );
}
