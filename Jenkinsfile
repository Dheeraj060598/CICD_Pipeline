pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'dheeraj060598/cicd-node-app'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials-id') {
                        docker.image(DOCKER_IMAGE).push('latest')
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop cicd-node-app || true
                docker rm cicd-node-app || true
                docker run -d -p 3000:3000 --name cicd-node-app ${DOCKER_IMAGE}
                '''
            }
        }
    }
}

