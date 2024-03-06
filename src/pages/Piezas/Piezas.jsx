import React, { useCallback, useEffect, useState } from "react";
import { axiosRequest } from "../../accions/Login/login.accion";
import { SideBarNew } from "../../components/SideBar/SideBar";
import Filtrado from "../../components/Filtrado/Filtrado";
import Spinner from "../../components/SpinnerLoading/Spinner";
import { useNavigate } from "react-router-dom";
import { usePieza } from "../../Context/PiezaContext";

const Piezas = () => {
  const navigate = useNavigate();
  const { setPiezaSeleccionada } = usePieza();
  const [listado, setListado] = useState([]);
  const [loadig, setLoading] = useState(false);

  const listadoPieza = useCallback(async () => {
    const listadoPiezas = await axiosRequest({
      method: "GET",
      url: "http://localhost:3001/api/yonke/piezas/obtener/piezas",
    });
    setListado(listadoPiezas.data);
    console.log(listadoPiezas.data);
    console.log(listado);
  }, []);

  const seleccionarPieza = (pieza) => {
    setPiezaSeleccionada(pieza);
    console.log(pieza);
    navigate("detalle-pieza", { pieza: pieza });
  };

  useEffect(() => {
    listadoPieza();
  }, [listadoPieza]);
  return (
    <div className="flex">
      {loadig && <Spinner />}
      <div>
        <SideBarNew />
      </div>
      <div className="p-5 h-screen bg-gray-100 w-full">
        <h1 className="text-xl mb-2 font-semibold">
          Listado de piezas en stock
        </h1>
        <div className="flex-grow overflow-hidden">
          <Filtrado setLoading={setLoading} setListado={setListado} />
          <div className="overflow-auto  max-h-[calc(100vh-4rem)] rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200 sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Nombre
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Marca
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Modelo
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Año
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Descripcion
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Precio
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Estatus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {listado.length !== 0 ? (
                  listado.map((pieza, index) => (
                    <tr
                      className="bg-white hover:bg-gray-200 cursor-pointer"
                      key={index}
                      onClick={() => seleccionarPieza(pieza)}
                    >
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.nombre}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.marca}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.modelo}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.anio}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.descripcion}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {pieza.precio}
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium tracking-wide text-gray-500 bg-green-500 rounded-lg bg-opacity-30 ">
                          {pieza.estatus}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="p-3 text-sm text-gray-700 text-center"
                    >
                      No se encontraron piezas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 h-screen sm:grid-cols-2 gap-4 md:hidden ">
          <div className="flex-grow">
            <div className="overflow-auto max-h-[calc(100vh-4rem)]">
              {listado.map((pieza) => (
                <div className="bg-white space-y-3 p-4 m-2 rounded-lg shadow hover:bg-slate-100 cursor-pointer">
                  <div className="flex items-center space-x-2 text-sm p-2 uppercase">
                    <div className="text-gray-400 font-semibold">
                      {pieza.nombre}
                    </div>
                    <div className="text-gray-400 font-semibold">
                      {pieza.marca}
                    </div>
                    <div className="text-gray-400 font-semibold">
                      {pieza.modelo}
                    </div>
                    <div className="text-gray-400 font-semibold">
                      {pieza.anio}
                    </div>
                  </div>
                  <div className="text-blue-400 font-semibold">
                    {pieza.precio}
                  </div>
                  <div className="w-1/4 p-1.5 text-xs font-medium tracking-wide text-gray-500 bg-green-500 rounded-lg bg-opacity-30 ">
                    {pieza.estatus}
                  </div>
                  <div className="p-2">
                    <div className="text-black-400 font-semibold">
                      {pieza.descripcion}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piezas;
