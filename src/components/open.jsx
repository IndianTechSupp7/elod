import React from "react";

function OpenSection() {
  return (
    <section className="w-full flex justify-center pb-10 flex-col items-center">
      <span className="p-10 font-psemibold text-3xl">Nyitvatartás</span>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-xl border-b border-gray-500">
            <th className="p-6.5">Hétfő-Csütörtök</th>
            <th className="p-6.5">Péntek-Szombat</th>
            <th className="p-6.5">Vasárnap</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xl border-b border-gray-500">
            <td className="p-6.5 text-center">6:00 - 21:00</td>
            <td className="p-6.5 text-center">6:00 - 20:00</td>
            <td className="p-6.5 text-center">zárva</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default OpenSection;
