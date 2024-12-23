import { LoadingSpinner } from "../../shared";
import { useLabels } from "../hooks";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels()
  
  if (labelsQuery.isLoading) return (
    <div className="flex justify-center items-center h-52">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {
        labelsQuery.data?.map((label) => (
          <span
            key={label.id}
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
            style={{ border: `1px solid #${label.color}` }}
          >
            {label.name}
          </span>
        ))
      }
    </div>
  );
};
