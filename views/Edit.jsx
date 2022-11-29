
const React = require("react")
const DefaultLayout = require("./layouts/Default")

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title={`Edit Log: ${this.props.log.title}`}>
                <a href="/logs/">View All Logs</a><br />

                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">

                    <table>
                        <tr>
                            <td>Title: </td>
                            <td><input type="text" name="title" defaultValue={this.props.log.title} /></td>
                        </tr>
                        <tr>
                            <td>Entry: </td>
                            <td><textarea name="entry" rows="4" cols="50" defaultValue={this.props.log.entry}></textarea></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="shipIsBroken" >Ship needs repairs?</label></td>
                            <td>{this.props.log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" id="shipIsBroken" defaultChecked /> : <input type="checkbox" name="shipIsBroken" id="shipIsBroken" />}</td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit Edit" /></td>
                        </tr>
                    </table>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit