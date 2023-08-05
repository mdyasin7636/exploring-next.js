export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero',
  }

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h1>SideBar</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;