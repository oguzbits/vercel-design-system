import { Spacer } from "@/components/ui";
import { Pagination } from "@/components/ui";
import {
  ChevronRight,
  ChevronLeft,
  ChevronRightCircle,
  ChevronLeftCircle,
  ChevronRightCircleFill,
  ChevronLeftCircleFill,
} from "@geist-ui/icons";

export const Basic = {
  tags: ["!sidebar"],
  render: () => <Pagination count={20} initialPage={3} />,
};

export const Limit = {
  tags: ["!sidebar"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Pagination count={10} limit={10} />
      <Pagination count={5} />
      <Pagination count={10} initialPage={6} limit={5} />
      <Pagination count={10} initialPage={6} />
      <Pagination count={30} initialPage={6} limit={10} />
    </div>
  ),
};

export const Icon = {
  tags: ["!sidebar"],
  render: () => (
    <>
      <Pagination count={5}>
        <Pagination.Next>
          <ChevronRight />
        </Pagination.Next>
        <Pagination.Previous>
          <ChevronLeft />
        </Pagination.Previous>
      </Pagination>
      <Spacer h={0.5} />
      <Pagination count={5}>
        <Pagination.Next>
          <ChevronRightCircle />
        </Pagination.Next>
        <Pagination.Previous>
          <ChevronLeftCircle />
        </Pagination.Previous>
      </Pagination>
      <Spacer h={0.5} />
      <Pagination count={5}>
        <Pagination.Next>
          <ChevronRightCircleFill />
        </Pagination.Next>
        <Pagination.Previous>
          <ChevronLeftCircleFill />
        </Pagination.Previous>
      </Pagination>
    </>
  ),
};
