import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async (props: Props) => {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
