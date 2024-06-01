import { PropsWithChildren } from "react";
import { requestErrorHandler } from "~/lib/request";

export default async function HomeLayout(props: PropsWithChildren) {
  return <div> {props.children} </div>
}