
const React = require("react")
const DefaultLayout = require("./layouts/Default")

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create New Log">
                <a href="/logs/">View All Logs</a><br />

                <form action="/logs" method="POST">

                    <table>
                        <tr>
                            <td>Title: </td>
                            <td><input type="text" name="title" /></td>
                        </tr>
                        <tr>
                            <td>Entry: </td>
                            <td><textarea name="entry" rows="4" cols="50"></textarea></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="shipIsBroken" >Ship needs repairs?</label></td>
                            <td><input type="checkbox" name="shipIsBroken" id="shipIsBroken" /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Send Log" /></td>
                        </tr>
                    </table>

                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New