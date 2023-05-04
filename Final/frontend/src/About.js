export function About() {
    return (
        <div>
            <div class="container py-4">
                <header class="pb-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                        <span class="fs-4">Team 47</span>
                    </a>
                </header>
                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 rounded-3" style={{ backgroundColor: '#3A98B9', }}>
                            <h2>Randy Nguyen</h2>
                            <p>Currently a Junior majoring in Computer Science. I enjoy working with computers and learning
                                new techonology!</p>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 border rounded-3" style={{ backgroundColor: '#FFF1DC', }}>
                            <h2>Matthew Duncan</h2>
                            <p>I am a Senior at majoring in Computer Science. Working on the backend server for my senior
                                project has kept me very busy this semester!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}