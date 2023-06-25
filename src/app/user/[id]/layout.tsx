export default async function User({ children, profile }: { children: React.ReactNode, modal: React.ReactNode, profile: React.ReactNode }) {

  return <>
    <h2>User page</h2>
    {children}
    {profile}
  </>
}
