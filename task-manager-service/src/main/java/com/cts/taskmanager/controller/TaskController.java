package com.cts.taskmanager.controller;

/**
 * @author Admin
 */

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cts.taskmanager.constant.TaskManagerAppConstant;
import com.cts.taskmanager.entity.Task;
import com.cts.taskmanager.service.TaskService;



@CrossOrigin(origins = "*", allowedHeaders="*")
@org.springframework.stereotype.Controller
public class TaskController {

	@Autowired
	TaskService taskService;
	
	Logger appLogger = LoggerFactory.getLogger(TaskController.class);

	
	@RequestMapping(value=TaskManagerAppConstant.addTask, method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public String includeTask(@RequestBody Task task) throws Exception {
		appLogger.info("Start --> addTask Method");
		try {
			taskService.includeTask(task);
		}catch(Exception ex) {
			appLogger.error("Exception in include task");
			throw ex;
		}
		appLogger.info("End ---> includeTask Method");
		return "SUCCESS";
	}

	
	@RequestMapping(value=TaskManagerAppConstant.removeTask, method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody List<Task> deleteTask(@PathVariable int task_id) throws Exception {
		appLogger.info("Start --> removeTask Method");
		List<Task> deleteTaskList = null;
		try {
			deleteTaskList = taskService.removeTaskDetail(task_id);
		}catch(Exception ex) {
			appLogger.error("Exception occured in delete task detail method");
			throw ex;
		}
		appLogger.info("End --> remove Task Method");
		return deleteTaskList;
	}

	
	@RequestMapping(value=TaskManagerAppConstant.updateTask, method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public String editTask(@RequestBody Task task, @PathVariable int task_id) throws Exception {
		appLogger.info("Start --> editTask Method");
		try {
			taskService.modifyTask(task);
		}catch(Exception ex) {
			appLogger.error("Exception occured in editTask detail method");
			throw ex;
		}
		appLogger.info("End--->  editTask Method");
		return "updated";
	}

	
	@RequestMapping(value=TaskManagerAppConstant.viewTask, method = RequestMethod.GET, produces = "application/json")
	public @ResponseBody List<Task> viewtask() throws Exception {
		appLogger.info("Start--->  View Task Method");
		List<Task> viewTaskList = null;
		try {
			viewTaskList = taskService.getAllTaskDetail();
		}catch(Exception ex) {
			appLogger.error("Exception occured in viewtask detail method");
			throw ex;
		}
		appLogger.info("End--->  View Task Method");
		return viewTaskList;
	}


}
