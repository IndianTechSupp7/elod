import React from "react";

function OpenSection() {
  return (
    <section className="w-full flex justify-center pb-10 flex-col items-center">
      <span className="p-10 font-psemibold text-3xl">Nyitvatartás</span>
      <table className="table-auto">
        <thead className="border-b border-gray-500">
          <tr className="text-xl">
            <th className="p-6.5">Hétfő-Csütörtök</th>
            <th className="p-6.5">Péntek-Szombat</th>
            <th className="p-6.5">Vasárnap</th>
          </tr>
        </thead>
        <tbody className="border-b border-gray-500 text-xl">
          <tr className="border-gray-200 p-4.5">
            <td scope="col"  className="flex justify-center">6:00 - 21:00</td>
            <td className="flex justify-center">6:00 - 20:00</td>
            <td className="flex justify-center">zárva</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default OpenSection;
