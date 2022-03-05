import React, {
  useState,
  useCallback
} from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
  LinearProgress
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import UploadIcon from '@material-ui/icons/CloudUpload';
import MoreIcon from '@material-ui/icons/MoreVert';
import type { Theme } from 'src/theme';
import bytesToSize from 'src/utils/bytesToSize';
import LoadingButton from './LoadingButton';

interface FilesDropzoneProps {
  className?: string;
  files: any;
  setFiles: (set: any) => void;
  handleUpload?: (files: File[]) => void;
  showDropzone?: boolean;
  showTitle?: boolean;
  isSubmitting?: boolean;
  progress?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  dropZone: {
    position: 'relative',
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(2),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.5
  },
  image: {
    width: 130,
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const FilesDropzone: FC<FilesDropzoneProps> = ({ className, files, setFiles, handleUpload, showDropzone, showTitle, isSubmitting, progress, ...rest }) => {
  const classes = useStyles();
  //const [files, setFiles] = useState<any[]>([]);

  const handleDrop = useCallback((acceptedFiles) => {
    // setFiles((prevFiles) => [...prevFiles].concat(acceptedFiles));  // For handling multiple files
    setFiles(acceptedFiles);
  }, []);

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop
  });

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {showDropzone ?
        <div
          className={clsx({
            [classes.dropZone]: true,
            [classes.dragActive]: isDragActive
          })}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div>
            <img
              alt="Select file"
              className={classes.image}
              src="/static/images/undraw_add_files_re_v09g.svg"
            />
          </div>
          <div>
            {showTitle ?
              <Box mb={2}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="h4"
                >
                  Select file
                </Typography>
              </Box>
              : null}
            <Box>
              <Typography
                color="textSecondary"
                variant="caption"
              >
                Drop file here or
                {' '}
                <Link
                  underline="always"
                  color="secondary"
                >
                  browse
                </Link>
                {' '}
                through your machine
              </Typography>
            </Box>
          </div>

          {progress === 0 || progress > 0 ?
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <LinearProgress
                color="primary"
                value={progress}
                variant="determinate"
              />
            </div>
            : null}

        </div>
        : null}

      {files.length > 0 && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={i}
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(file.size)}
                  />
                  {/* <Tooltip title="More options">
                    <IconButton edge="end">
                      <MoreIcon />
                    </IconButton>
                  </Tooltip> */}
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
          <div className={classes.actions}>
            <Button
              onClick={handleRemoveAll}
              size="small"
            >
              Remove
            </Button>
            {handleUpload ?
              <LoadingButton
                color="inherit"
                size="small"
                variant="outlined"
                startIcon={<UploadIcon />}
                onClick={e => handleUpload(files)}
                isSubmitting={isSubmitting}
              >
                Upload
              </LoadingButton>
              : null}
          </div>
        </>
      )}
    </div>
  );
};

FilesDropzone.propTypes = {
  className: PropTypes.string,
  files: PropTypes.any,
  setFiles: PropTypes.func,
  handleUpload: PropTypes.func,
  showDropzone: PropTypes.bool,
};

FilesDropzone.defaultProps = {
  showDropzone: true,
  showTitle: true,
};

export default FilesDropzone;
