import Header from "../components/Header";
import HeaderNav from "../components/HeaderNav";

function CsDashboard() {
  return (
    <div>
      <Header />
      <HeaderNav />
      <h1>Course Dashboard</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Title</th>
              <th>Credit Hour</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="primary-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CsDashboard;
