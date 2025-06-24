pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'dheerajkrishna4004/cicd-node-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Dheeraj060598/CICD_Pipeline.git'
            }
        }

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
                script {
                    sh 'docker rm -f cicd-node-app || true'
                    sh "docker run -d --name cicd-node-app -p 3000:3000 ${DOCKER_IMAGE}"
                }
            }
        }
    }
}
