import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { Project } from "@/types/common/Project";

const TableRowData = ({ label, value }: TableRowProps) => (
  <TableRow>
    <TableCell>
      <Typography fontWeight={700} color="text.secondary">
        {label}
      </Typography>
    </TableCell>
    <TableCell>
      <Typography fontWeight={700} color="text.disabled">
        {value}
      </Typography>
    </TableCell>
  </TableRow>
);
type TableRowProps = { label: ReactNode; value: ReactNode };

function KeysTable({ project }: Props) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          <TableRowData label={"YEAR"} value={project.year} />
          <TableRowData label={"LOCATION"} value={project.location} />
          <TableRowData label={"AREA"} value={project.data} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type Props = {
  project: Project;
};

export default KeysTable;
