package com.csfaubion.bugtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;

@SpringBootApplication
@EnableJdbcRepositories
public class BugtrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BugtrackerApplication.class, args);
	}

}

// // use this to see what beans get initialized.
// package com.csfaubion.bugtracker;

// import java.util.Arrays;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.ApplicationContext;

// @SpringBootApplication
// public class BugtrackerApplication implements CommandLineRunner {
// 	@Autowired
// 	private ApplicationContext appContext;

// 	public static void main(String[] args) {
// 		SpringApplication.run(BugtrackerApplication.class, args);
// 	}

// 	@Override
// 	public void run(String... args) throws Exception {

// 		String[] beans = appContext.getBeanDefinitionNames();
// 		Arrays.sort(beans);
// 		for (String bean : beans) {
// 			System.out.println(bean);
// 		}

// 	}
// }
