package com.csfaubion.bugtracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class SecurityConfiguration {
    @Configuration
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests().antMatchers("/", "/login", "/user", "/test", "/bugtracker/*", "/*.js", "/*.css")
                    .permitAll().anyRequest().authenticated()
                    .and().logout().permitAll()
                    .and().httpBasic()
                    .and().cors()
                    .and().csrf()
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());

        }

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication().withUser("user").password("{noop}password").roles("USER")
            .and().withUser("tech").password("{noop}password").roles("TECH")
            .and().withUser("admin").password("{noop}password").roles("ADMIN");
        }

    }
}
