import './App.css'
import {} from"@progress/kendo-theme-material"

function App() {

    return (
        <>
            <div style={{background: "#ff0000"}}>appbar</div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "16p",
                height: "95vh",
                background:"#ccc"
            }}>
                <div style={{display: "flex", justifyContent: "space-between", gap: "16p"}}>
                    <div style={{background: "#ddd", height:'100%', position:"relative", top:0, bottom: 0}}>left panel</div>
                    <div style={{background: "#fff"}}>center</div>
                    <div style={{background: "#d0d0d0"}}>right panel</div>
                </div>

                <div style={{background: "#dfdfdf"}}>bottom panel</div>
            </div>
            <div style={{background: "#000", color: "#fff", position: "absolute", bottom: 0, width: "100%", maringTop:"auto"}}>footer
            </div>
        </>
    )
}

export default App
