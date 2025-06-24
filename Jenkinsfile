pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id') // Replace with your Jenkins Docker Hub credentials ID
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
                    sh 'docker build -t dheeraj060598/cicd-node-app .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
                    sh 'docker push dheeraj060598/cicd-node-app'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh 'docker rm -f cicd-node-app || true'
                    sh 'docker run -d --name cicd-node-app -p 3000:3000 dheeraj060598/cicd-node-app'
                }
            }
        }
    }
}
