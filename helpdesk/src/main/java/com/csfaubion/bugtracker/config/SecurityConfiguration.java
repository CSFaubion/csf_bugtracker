package com.csfaubion.bugtracker.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class SecurityConfiguration {
    @Configuration
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {
        @Autowired
        private DataSource dataSource;

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests().antMatchers("/", "/login", "/user", "/test", "/bugtracker/*", "/*.js", "/*.css")
                    .permitAll().anyRequest().authenticated().and().logout().permitAll().and().httpBasic().and().cors()
                    .and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());

        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.jdbcAuthentication().dataSource(dataSource)
                    .usersByUsernameQuery("SELECT username, password, enabled FROM user WHERE username = ?")
                    .authoritiesByUsernameQuery(
                            "SELECT u.username AS username, a.role AS authority FROM user AS u INNER JOIN authority AS a ON u.user_id=a.user WHERE u.username=?;");

            // .passwordEncoder(passwordEncoder());

            // auth.inMemoryAuthentication().withUser("user").password("{noop}password").roles("USER").and()
            // .withUser("tech").password("{noop}password").roles("TECH").and().withUser("admin")
            // .password("{noop}password").roles("ADMIN");
        }

        // @Bean
        // public PasswordEncoder passwordEncoder() {
        // return new BCryptPasswordEncoder();
        // }

    }
}
