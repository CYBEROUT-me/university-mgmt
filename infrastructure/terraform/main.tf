terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "university-mgmt-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# RDS PostgreSQL
resource "aws_db_instance" "postgres" {
  identifier        = "university-mgmt-db"
  engine            = "postgres"
  engine_version    = "15.4"
  instance_class    = "db.t3.medium"
  allocated_storage = 20
  db_name           = "university_db"
  username          = var.db_username
  password          = var.db_password
  multi_az          = true
  storage_encrypted = true
  skip_final_snapshot = true

  tags = {
    Name        = "university-mgmt-db"
    Environment = var.environment
  }
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "university-mgmt-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  port                 = 6379
}

variable "aws_region"   { default = "eu-central-1" }
variable "environment"  { default = "production" }
variable "db_username"  { sensitive = true }
variable "db_password"  { sensitive = true }
