const React = require("react")
const DefaultLayout = require("./layouts/Default")

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken } = this.props.log
        return (
            <DefaultLayout title={`Captain's Log: ${title}`}>
                <a href="/logs/">View All Logs</a><br /><br />

                <div>
                    <table>
                        <tr>
                            <td>Title: </td>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <td>Entry: </td>
                            <td>{entry}</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="shipIsBroken" >Ship needs repairs?</label></td>
                            <td>{shipIsBroken ? "Ship maintenance required." : "No maintenance necessary."}</td>
                        </tr>
                    </table>
                    <a href={`/logs/${this.props.log._id}/edit`}><button type="button">Edit Log</button></a>
                </div>
            </DefaultLayout>
        )
    }
}



module.exports = Show