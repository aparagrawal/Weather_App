import './DashboardLayout.css';
const DashboardLayout = ({ children }: any) => {
  return (
    <>
      <div 
       className="dashboard-layout"
      >
        {children}
      </div>
    </>
  );
}

export default DashboardLayout;