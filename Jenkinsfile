pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:16.13.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm install --save'
            }
        }
    }
}
