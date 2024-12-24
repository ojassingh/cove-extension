import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function TeamMembers() {
  const memberData = [
    {
      id: "jenny-rosen",
      name: "Jenny Rosen",
      email: "ron@gooper.co",
      bitmoji: "https://cove-stage.vercel.app/assets/10-XEJPGnCS.png",
      reports: 10,
    },
    {
      id: "cyril-mangalan",
      name: "Cyril Mangalan",
      email: "cyril@getcove.co",
      bitmoji: "https://cove-stage.vercel.app/assets/12-BruSM7Mf.png",
      reports: 10,
    },
    {
      id: "haha-jhoe",
      name: "Haha Jhoe",
      email: "rill2@getcove.co",
      bitmoji: "https://cove-stage.vercel.app/assets/14-ytmrd80Y.png",
      reports: 10,
    },
  ];

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Team Members (3)</CardTitle>
        <CardContent className="px-0 grid place-content-center gap-2 mt-1">
          <Button className="mt-1">Add Member</Button>
          <div className="mt-1">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Reports</th>
                </tr>
              </thead>
              <tbody className="mt-1">
                {memberData.map(({ id, name, email, bitmoji, reports }) => {
                  return (
                    <tr key={id} id={id} className="">
                      <td className="flex items-center gap-2">
                        <img
                          src={bitmoji}
                          style={{ height: "35px" }}
                          className=""
                        ></img>
                        <div>
                          <p className="text-xs font-medium">{name}</p>
                          <p className="text-xs">{email}</p>
                        </div>
                      </td>
                      <td className="text-sm text-center">{reports}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
