import { PropsWithChildren } from "react";
import { queryClient } from "~/lib/query-client";
import { queryKey } from "./query";
import { requestErrorHandler } from "~/lib/request";
import { dehydrate } from '@tanstack/react-query'
import { isShallowEqualArray } from "~/lib/helper";
import { QueryHydrate } from "~/components/common/QueryHydrate";

export default async function HomeLayout(props: PropsWithChildren) {
  // await queryClient
  //   .fetchQuery({
  //     queryKey,
  //     queryFn: async () => {

  //     },
  //   })
  //   .catch(requestErrorHandler)

  // const dehydrateState = dehydrate(queryClient, {
  //   shouldDehydrateQuery(query: any) {
  //     return isShallowEqualArray(query.queryKey as any, queryKey)
  //   },
  // })
  // return <QueryHydrate state={dehydrateState}>{props.children}</QueryHydrate>

  return <div> {props.children} </div>
}