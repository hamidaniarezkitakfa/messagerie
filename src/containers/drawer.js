import React from 'react';
import clsx from 'clsx';
import { makeStyles,Box, useTheme ,Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider
,IconButton,fade,InputBase,ListItemIcon,ListItem,Badge,Avatar,Button,Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
//import {AiFillMessage} from "react-icons/ai";
import HomeIcon from '@material-ui/icons/Home';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor:'#fff'
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  


    width: 100,
  },
 
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  name:{
    marginTop: 12 ,
    marginLeft: 10 ,
    cursor: 'pointer',
    color:'black',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  
  search: {
    flexGrow: 0.3,
    height: 40,
    position: 'relative',
    borderRadius: 15,
    backgroundColor:' #f5fbff',
   border:'1px solid #f1f1f1',
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#a09e9e',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  drawerPaper:{
backgroundColor:'#3e64ff',

  },  

}));

const NavBar= () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


    return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar
       style={{backgroundColor:'#fff',
       height: 75,
      }}
       
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon style={{color:'#50b5ff'}}/>
          </IconButton>
          <Typography variant="h6"className={classes.title} noWrap>
               UniSwap
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color:'#50b5ff'}} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box display="flex"justifyContent="flex-end" flexGrow= {1}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{width: 50,
    height: 50}} />
          <h6 href="#text-buttons" className={classes.name}>
                        Lamia 
                   </h6>
          
          <IconButton aria-label="show 17 new notifications"  style={{color:'#50b5ff'}}>
              <Badge badgeContent={7} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>          
            <IconButton aria-label="show 4 new mails" style={{color:'#50b5ff'}}>
              <Badge badgeContent={4} color="secondary">
                {/*<AiFillMessage />*/}
              </Badge>
            </IconButton>
            <IconButton aria-label="" style={{color:'#50b5ff'}}>
          
                < PowerSettingsNewIcon />
          
            </IconButton>
           
           </Box>
        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawerPaper,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            
          }),
          
        }}
        
      >
        <div className={classes.tool }>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{marginTop:40}}>
        <ListItem button>
          <ListItemIcon>
          <HomeIcon style={{color:'#fff'}}/>
        
          </ListItemIcon >
          <Typography >Home</Typography>
          </ListItem>
         
          <ListItem button>
          <ListItemIcon>
         {/* <AiFillMessage style={{color:'#fff', fontSize:22}} /> */}
          </ListItemIcon> 
          <Typography >Messages</Typography>
          </ListItem>
          <ListItem button>
          <ListItemIcon>
          <LaptopChromebookIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <Typography >Cours</Typography>
          </ListItem>
          <ListItem button>
          <ListItemIcon>
          <GroupIcon style={{color:'#fff'}}/> 
          </ListItemIcon>
          <Typography >Vous Groupes</Typography>
          </ListItem>
          <ListItem button>
          <ListItemIcon>
          <SettingsIcon style={{color:'#fff'}}/>
          </ListItemIcon>
          <Typography >Paramètres</Typography>
          </ListItem>

          
        </List>
        
      </Drawer>
      
      </div>
    )
}

export default NavBar
