variable "aws_region" {
  default = "ap-south-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  description = "AWS key pair name"
  default     = "DevOps-Pipeline" 
}


variable "ami_id" {
  description = "Ubuntu AMI_ID"
  default = "ami-02521d90e7410d9f0"
}
