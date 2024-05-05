// export default function page() {
//   return (
//     <div className="">
//       <div className="h-screen text-2xl dark:bg-neutral-700 flex justify-center">
//         <div className="border-2 border-slate-600 w-fit h-fit">
//           <div className="bg-slate-800 h-28"></div>
//           <div className="h-5/6 flex w-5/6">
//             <div className="bg-emerald-800 w-1/4"></div>
//             <div className="dark:bg-neutral-700 bg-white w-3/4"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Page() {
  return (
    <div className="dark">
      <div className="dark:bg-neutral-700 flex justify-center h-screen">
        <div className="border-2 w-5/6 overflow-hidden my-10 shadow-md shadow-slate-50 dark:shadow-neutral-800">
          <div className="bg-slate-800 h-1/6"></div>
          <div className="flex w-full h-full">
            <div className="bg-emerald-800 w-1/4 h-5/6"></div>
            <div className="dark:bg-neutral-700 w-3/4 h-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
