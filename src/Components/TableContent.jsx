import React from "react";

const TableContent = ({ tableData }) => {
  return (
    <>
      {tableData.length > 0 && (
        <div className="px-2 sm:px-8 md:px-16 my-9">
          <table className="w-full  overflow-auto shadow-2xl shadow-[#F5F5F5]">
            <thead>
              <tr className="bg-[#F5F5F5] border-b border-[#E1CFFF]">
                <th className="p-2  rounded-tl-md">Name</th>
                <th className="p-2 ">Gender</th>
                <th className="p-2 ">Language</th>
                <th className="p-2 rounded-tr-md">Email</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user, idx) => (
                <tr className="text-center border-b border-[#E1CFFF]">
                  <td className="p-2  flex items-center justify-center gap-2">
                    <input type="checkbox" />
                    <span>{user.firstName + user.lastName}</span>
                  </td>
                  <td className="p-2  ">{user.gender}</td>
                  <td className="p-2 ">{user.language.map((lang, idx) => <span key={idx}>{lang} </span>)}</td>
                  <td className="p-2 ">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TableContent;
