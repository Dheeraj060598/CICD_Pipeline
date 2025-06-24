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
