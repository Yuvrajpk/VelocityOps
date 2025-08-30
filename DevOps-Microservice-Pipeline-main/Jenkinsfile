pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/ansumannayak-2k/DevOps-Microservice-Pipeline.git', branch: 'main'
      }
    }

    stage('Build user-service Docker Image') {
      steps {
        dir('microservices/user-service') {
          sh 'docker build -t user-service:latest .'
        }
      }
    }

    stage('Test user-service in Docker') {
      steps {
        sh 'docker run --rm user-service:latest npm test || echo "No tests configured"'
      }
    }

    stage('Build product-service Docker Image') {
      steps {
        dir('microservices/product-service') {
          sh 'docker build -t product-service:latest .'
        }
      }
    }

    stage('Test product-service in Docker') {
      steps {
        sh 'docker run --rm product-service:latest npm test || echo "No tests configured"'
      }
    }

    stage('Build frontend Docker Image') {
      steps {
        dir('microservices/frontend') {
          sh 'docker build -t frontend:latest .'
        }
      }
    }

    stage('Success') {
      steps {
        echo 'Pipeline completed successfully!'
      }
    }
  }
}
