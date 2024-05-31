import { PropsWithChildren } from "react";
import { queryKey } from "./query";
import { requestErrorHandler } from "~/lib/request";
import { QueryHydrate } from "~/components/common/QueryHydrate";

export default async function HomeLayout(props: PropsWithChildren) {

  return <div> {props.children} </div>
}