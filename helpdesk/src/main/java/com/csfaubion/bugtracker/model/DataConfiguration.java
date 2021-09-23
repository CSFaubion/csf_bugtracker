// package com.csfaubion.bugtracker.model;

// import javax.sql.DataSource;

// // import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.PropertySource;
// import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
// import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
// import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
// import org.springframework.jdbc.datasource.DataSourceTransactionManager;
// import org.springframework.transaction.TransactionManager;

// @Configuration
// @EnableJdbcRepositories (basePackages= "com.csfaubion.bugtracker.model")
// @PropertySource("classpath:jdbc-connection.properties")
// public class DataConfiguration {
 
//     // @Bean
//     // NamedParameterJdbcOperations namedParameterJdbcOperations(DataSource dataSource) { 
//     //     return new NamedParameterJdbcTemplate(dataSource);
//     // }

//     // @Bean
//     // TransactionManager transactionManager(DataSource dataSource) {                     
//     //     return new DataSourceTransactionManager(dataSource);
//     // }
// }
// // #TODO: this entire file may be unnecessary due to spring-boot-starter-data-jdbc 