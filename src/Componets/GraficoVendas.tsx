import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  YAxis,
  Legend,
} from "recharts";
import { IVendas } from "../Context/DataContext";
import { GraphicalItem } from "recharts/types/chart/generateCategoricalChart";

type IVendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVendas[]): IVendaDia[] {
  const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

export const GraficoVendas = ({ data }: { data: IVendas[] }) => {
  const tranformatedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={tranformatedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" />
        <Line type="monotone" dataKey="processando" stroke="#FBCB21" />
        <Line type="monotone" dataKey="falha" stroke="#000" />
      </LineChart>
    </ResponsiveContainer>
  );
};
