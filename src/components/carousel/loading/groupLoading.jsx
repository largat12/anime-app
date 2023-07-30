import { ItemLoading } from "./itemLoading"

export const GroupLoading = () => {
  return (
    <div className="container w-full max-w-full flex flex-row loading-card overflow-hidden">
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
        <ItemLoading />
    </div>
  )
}
