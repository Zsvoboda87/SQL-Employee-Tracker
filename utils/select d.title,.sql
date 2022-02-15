select d.title, 
        sum(r.salary)
from employees e
    join roles r on r.id = e.role_id
    join department d on r.department_id = d.id
where 
    d.title = '?'
group by d.title;