// Define chart colors
const colors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)'
];

// Department data
const departmentData = {
    labels: ["Bindery", "Digital", "Prepress", "TBD", "Personalised Products", "Warehouse"],
    datasets: [{
        label: 'Number of Issues',
        data: [72, 44, 11, 6, 2, 1],
        backgroundColor: colors,
        borderWidth: 1
    }]
};

// Rework reasons data
const reasonsData = {
    labels: ["Internal Error/Damage", "Shortage", "Lost Components"],
    datasets: [{
        label: 'Count',
        data: [103, 21, 12],
        backgroundColor: colors.slice(0, 3),
        borderWidth: 1
    }]
};

// Quantity by department
const quantityData = {
    labels: ["Digital", "Prepress", "Bindery", "TBD", "Personalised Products", "Warehouse"],
    datasets: [{
        label: 'Quantity Reworked',
        data: [4396, 2287, 2017, 170, 25, 17],
        backgroundColor: colors,
        borderWidth: 1
    }]
};

// Weekly trend data
const weeklyTrendData = {
    labels: ["Week May 19", "Week May 26", "Week Jun 2", "Week Jun 9", "Week Jun 16"],
    datasets: [
        {
            label: 'Number of Issues',
            data: [12, 28, 22, 19, 55],
            borderColor: colors[0],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y',
            tension: 0.1,
            fill: true
        },
        {
            label: 'Quantity Reworked',
            data: [567, 1918, 1292, 1486, 3649],
            borderColor: colors[1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y1',
            tension: 0.1,
            fill: true
        }
    ]
};

// Rework required types
const reworkTypesData = {
    labels: ["PPC", "Complete Book", "Limp Cover", "Text Section(s)", "Insert(s)", "Jacket", "Endpapers", "8pp Cover"],
    datasets: [{
        label: 'Count',
        data: [49, 34, 31, 8, 6, 5, 2, 1],
        backgroundColor: colors,
        borderWidth: 1
    }]
};

// CSR submission data
const csrData = {
    labels: ["IS", "KD", "JB", "RM", "LE", "CS"],
    datasets: [{
        label: 'Number of Submissions',
        data: [108, 10, 7, 5, 3, 3],
        backgroundColor: colors,
        borderWidth: 1
    }]
};

// Department by issue type
const deptByIssueData = {
    labels: ["Bindery", "Digital", "Prepress", "TBD", "Personalised Products", "Warehouse"],
    datasets: [
        {
            label: 'Internal Error/Damage',
            data: [52, 41, 4, 4, 1, 1],
            backgroundColor: colors[0],
            stack: 'Stack 0',
        },
        {
            label: 'Shortage',
            data: [10, 2, 7, 1, 1, 0],
            backgroundColor: colors[1],
            stack: 'Stack 0',
        },
        {
            label: 'Lost Components',
            data: [10, 1, 0, 1, 0, 0],
            backgroundColor: colors[2],
            stack: 'Stack 0',
        }
    ]
};

// Render charts
window.onload = function() {
    // Department Chart
    new Chart(
        document.getElementById('departmentChart'),
        {
            type: 'bar',
            data: departmentData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        }
    );
    
    // Reasons Chart
    new Chart(
        document.getElementById('reasonsChart'),
        {
            type: 'pie',
            data: reasonsData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        }
    );
    
    // Quantity by Department Chart
    new Chart(
        document.getElementById('quantityByDeptChart'),
        {
            type: 'bar',
            data: quantityData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        }
    );
    
    // Rework Types Chart
    new Chart(
        document.getElementById('reworkTypesChart'),
        {
            type: 'pie',
            data: reworkTypesData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        }
    );
    
    // Weekly Trends Chart
    new Chart(
        document.getElementById('weeklyTrendsChart'),
        {
            type: 'line',
            data: weeklyTrendData,
            options: {
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Number of Issues'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                        title: {
                            display: true,
                            text: 'Quantity Reworked'
                        }
                    }
                }
            }
        }
    );
    
    // CSR Chart
    new Chart(
        document.getElementById('csrChart'),
        {
            type: 'bar',
            data: csrData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        }
    );
    
    // Department by Issue Type Chart
    new Chart(
        document.getElementById('deptByIssueChart'),
        {
            type: 'bar',
            data: deptByIssueData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        }
    );
};