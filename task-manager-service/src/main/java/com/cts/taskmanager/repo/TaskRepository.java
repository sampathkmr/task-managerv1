package com.cts.taskmanager.repo;

import org.springframework.data.repository.CrudRepository;

import com.cts.taskmanager.entity.Task;
 
public interface TaskRepository extends CrudRepository<Task, Long>{
	
}