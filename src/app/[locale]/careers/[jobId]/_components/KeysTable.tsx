import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { WithJobProps } from "../page";
import dayjs from "dayjs";

const TableRowData = ({ label, value }: TableRowProps) => (
  <TableRow>
    <TableCell sx={{ pl: 0 }}>
      <Typography fontWeight={700} color="secondary.dark">
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

function KeysTable({ job }: WithJobProps) {
  return (
    <TableContainer sx={{ width: { xs: 1, md: 0.7, lg: 0.5, xl: 0.4 } }}>
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRowData
            label={"DATE"}
            value={dayjs(job.created_at).format("YYYY-MM")}
          />
          <TableRowData label={"LOCATION"} value={job.location} />
          <TableRowData label={"JOB TYPE"} value={job.job_type} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default KeysTable;
